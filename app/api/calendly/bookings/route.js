export async function GET() {
    const CALENDLY_PAT = process.env.CALENDLY_PAT;

 
    const userRes = await fetch('https://api.calendly.com/users/me', {
        headers: {
            Authorization: `Bearer ${CALENDLY_PAT}`,
            'Content-Type': 'application/json',
        },
    });

    if (!userRes.ok) {
        const errorData = await userRes.json();
        return new Response(
            JSON.stringify({ error: 'Failed to fetch user URI', details: errorData }),
            { status: userRes.status }
        );
    }

    const userData = await userRes.json();
    const userUri = userData.resource.uri;

   
    const eventsUrl = `https://api.calendly.com/scheduled_events?user=${userUri}`;
    const eventsRes = await fetch(eventsUrl, {
        headers: {
            Authorization: `Bearer ${CALENDLY_PAT}`,
            'Content-Type': 'application/json',
        },
    });

    if (!eventsRes.ok) {
        const errorData = await eventsRes.json();
        return new Response(
            JSON.stringify({ error: 'Failed to fetch scheduled events', details: errorData }),
            { status: eventsRes.status }
        );
    }

    const eventsData = await eventsRes.json();
    const events = eventsData.collection;

  
    const detailedEvents = await Promise.all(
        events.map(async (event) => {
            const inviteeRes = await fetch(`https://api.calendly.com/scheduled_events/${event.uri.split('/').pop()}/invitees`, {
                headers: {
                    Authorization: `Bearer ${CALENDLY_PAT}`,
                    'Content-Type': 'application/json',
                },
            });

            const inviteeData = await inviteeRes.json();

            return {
                ...event,
                invitees: inviteeData.collection || [],
            };
        })
    );

    return new Response(JSON.stringify({ events: detailedEvents }), { status: 200 });
}

export async function GET() {
    const CALENDLY_PAT = process.env.CALENDLY_PAT;
  
    const headers = {
      Authorization: `Bearer ${CALENDLY_PAT}`,
      'Content-Type': 'application/json',
    };
  
    try {
      // 1. Get current user
      const userRes = await fetch('https://api.calendly.com/users/me', { headers });
      const userData = await userRes.json();
      if (!userRes.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch user URI', details: userData }), {
          status: userRes.status,
        });
      }
  
      const userUri = userData.resource.uri;
  
      // 2. Fetch ALL scheduled events using pagination
      let allEvents = [];
      let nextPage = `https://api.calendly.com/scheduled_events?user=${userUri}&count=100`;
  
      while (nextPage) {
        const eventsRes = await fetch(nextPage, { headers });
        const eventsData = await eventsRes.json();
  
        if (!eventsRes.ok) {
          return new Response(
            JSON.stringify({ error: 'Failed to fetch scheduled events', details: eventsData }),
            { status: eventsRes.status }
          );
        }
  
        allEvents = allEvents.concat(eventsData.collection);
        nextPage = eventsData.pagination?.next_page;
      }
  
      // 3. Fetch invitees for each event
      const detailedEvents = await Promise.all(
        allEvents.map(async (event) => {
          const eventId = event.uri.split('/').pop();
          const inviteeRes = await fetch(`https://api.calendly.com/scheduled_events/${eventId}/invitees`, {
            headers,
          });
  
          const inviteeData = await inviteeRes.json();
  
          return {
            ...event,
            invitees: inviteeData.collection || [],
          };
        })
      );
  
      return new Response(JSON.stringify({ events: detailedEvents }), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Unexpected error occurred', details: err.message }), {
        status: 500,
      });
    }
  }
  
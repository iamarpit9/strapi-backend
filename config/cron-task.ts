module.exports = {
  keepAlive: {
    task: async ({ strapi }) => {
      console.log("Cron job running");
      try {
        const response = await fetch('https://patpug-backend.onrender.com/api/blogs');
        const data = await response.json(); // Assuming the endpoint returns JSON
        console.log('Cron job executed successfully:', data);
      } catch (error) {
        console.error('Error executing cron job:', error);
      }
    },
    options: {
      rule: '*/1 * * * *' // This will execute the task every minute
    },
  },
}


export default () => ({
    tasks: {
      '*/14 * * * *': {
        task: async ({ strapi }) => {
          try {
            // Use the native fetch API available in Node.js (v17.5+)
            // or require('node-fetch') if you're on an older version of Node.js.
            const response = await fetch('https://patpug-backend.onrender.com/api/blogs');
            const data = await response.json(); // or .json(), etc.
            console.log('Cron job executed successfully:', data);
          } catch (error) {
            console.error('Error executing cron job:', error);
          }
        },
        // options: {
        //   tz: 'Europe/Paris', // Set the time zone if needed
        // },
      },
    },
});

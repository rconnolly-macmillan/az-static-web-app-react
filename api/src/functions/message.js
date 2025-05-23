const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        console.log('Request:',request);
        console.log('Context:',context);
        
        const json = JSON.stringify({data: {request, context}})
        return { body: json };
    }
});
const routes = {
    paths: {
        '/': {
            get: {
                summary: "Page d'accueil",
                description: "Retourne un message d'accueil",
                responses: {
                    200: {
                        description: "Message de succès",
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'string',
                                    example: "Bonjour Nene ba!"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export default routes;
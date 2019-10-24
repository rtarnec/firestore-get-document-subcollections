const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getSubCollections = functions.https.onCall(async (data, context) => {

    const docPath = data.docPath;

    const collections = await admin.firestore().doc(docPath).listCollections();
    const collectionIds = collections.map(col => col.id);

    return { collections: collectionIds };

});
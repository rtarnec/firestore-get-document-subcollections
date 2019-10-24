# firestore-get-document-subcollections

A small Firebase project demonstrating how to fetch all the subcollections of a Firestore document.

The project is composed of:

- A Cloud Function that fetch the subcollections of a Document;
- A simple HTML page that demonstrates how it works from a web client.

Enter a document path in the dedicated field and click the button "Get Subcollections":

- If the document has one or more subcollections the page will display their list and fetch each document of each subcollection.
- If the document at the path does not exist or if it does not have any subcollection, the Cloud Function will return an empty array.

Do not forget to adapt, in the public/index.html file, the Firebase config object with your own project config. See https://firebase.google.com/docs/web/setup#config-object.

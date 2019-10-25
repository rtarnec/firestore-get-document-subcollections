# firestore-get-document-subcollections

A small Firebase project demonstrating how to fetch all the subcollections of a Firestore document.

The project is composed of:

- A Cloud Function that fetches the subcollections of a Document;
- A simple HTML page that demonstrates how it works from a web client.

### How to use it?

Deploy it to one of your Firebase project and open the root url of the project (https://<your-project-id>.firebaseapp.com) with your preferred browser.

Enter a document path in the dedicated field and click the button "Get Subcollections":

- If the document has one or more subcollections the page will display their list and fetch each document of each subcollection.
- If the document at the path does not exist or if it does not have any subcollection, the Cloud Function will return an empty array.

Do not forget to adapt, in the public/index.html file, the Firebase config object with your own project config. See https://firebase.google.com/docs/web/setup#config-object.

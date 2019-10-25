# firestore-get-document-subcollections

A small Firebase project demonstrating how to fetch all the subcollections of a Firestore document.

The project is composed of:

- A Cloud Function that fetches the subcollections of a Document;
- A simple HTML page that demonstrates how it works from a web client.

It demonstrates the approach presented in the following article: https://medium.com/firebase-tips-tricks/how-to-list-all-subcollections-of-a-cloud-firestore-document-17f2bb80a166

### How to use it?

#### Deploy it to one of your Firebase project

- Clone the project `$ git clone https://github.com/rtarnec/firestore-get-document-subcollections.git`
- Install the packages locally by doing `$ npm install` in the `functions` directory
- From the project root directory, list your existing Firebase projects (`$ firebase projects:list`)
- Choose, from the list, the Firebase project you want to use for deployment (If you don't have any Firebase project -or you want to use a new project-, create one in the Firebase console https://console.firebase.google.com/, and re-do `$ firebase projects:list`)
- IMPORTANT Adapt in the `public/index.html` file, the Firebase config object with your own project config. See https://firebase.google.com/docs/web/setup#config-object.
- Deploy the project by doing `$ firebase deploy`

#### Use a browser to open the unique HTML page of the project (i.e. index.html)

After deployment to Firebase, open the root url of the project (https://your-project-id.firebaseapp.com) with your preferred browser.

Enter a document path in the dedicated field and click the button "Get Subcollections":

- If the document has one or more subcollections the page will display their list and fetch each document of each subcollection.
- If the document at the path does not exist or if it does not have any subcollection, the Cloud Function will return an empty array.

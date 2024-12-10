The Firebase SDK might throw an error if you try to access a property of a document snapshot before the `snapshot.exists` check has confirmed the document's existence.  This often happens in asynchronous operations where data isn't immediately available. For example:

```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  // Incorrect: This might throw if the document doesn't exist.
  const myData = snapshot.data().myField; 
  console.log(myData);
});
```
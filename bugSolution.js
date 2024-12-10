The correct way to access data from a Firebase document snapshot involves checking the `snapshot.exists` property before accessing any data:

```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  if (snapshot.exists) {
    const myData = snapshot.data().myField; 
    console.log(myData);
  } else {
    console.log('Document does not exist!');
    // Handle the case where the document is not found
  }
});
```

This ensures that you only attempt to access data properties when you know the document exists, preventing runtime errors.  Additionally, handling the case where the document doesn't exist adds robustness to your application.
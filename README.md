# Firebase Snapshot Access Before Existence Check

This repository demonstrates a common error in Firebase when accessing document snapshot properties before verifying the document's existence using `snapshot.exists`.  The `bug.js` file showcases the incorrect approach, which can lead to runtime errors. The `bugSolution.js` file provides the corrected version.
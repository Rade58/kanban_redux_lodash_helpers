# I CAN REFACTOR MY CODE AND IN THIS BRANCH I WILL ENCAPSULATE, CODE USED IN REDUCERS

I THINK OF MANAGING STATE BY

- ADDING CARDS
- REMOVING CARDS
- MOVING CARDS

ALL OF THAT CAN BE ENCAPSULATED IN HELPER FUNCTIONS I CAN CREATE

## I NEED TO RECOGNIZE WHAT VALUES ARE BEING PASSED, OR HOW THERE CAN I USE REUSABILITY

## BEST WAY IS TO READ A CODE AND RECOGNIZE SOME PATTERNS THAT CAN COMMONLY BE USED AROUND

FOR EXAMPLE LETS SAY THAT YOU HAVE MORE BRANCHES IN YOUR STATE TREE; YOU WOULD NEED TO RECOGNIZE WHERE WOULD YOU 

- FOR ADDING CARD I CAN SEE ONE PATTERN, WHERE YOU ARE ALWAYS ADDING NEW OBJECT TO entities; BUT ALSO YOU ARE ADDING ONE NEW MEMEBER TO ids ARRAY

- FOR REMOVING CARD I CAN SEE ONE PATTERN, WHERE YOU ARE ALWAYS REMOVING ONE OBJECT FROM entities; BUT ALSO YOU ARE REMOVING ONE MEMBER FROM ids ARRAY

## THIS NEXT PATTERN OR TWO PATTERNS ARE IMPORTANT TO RECOGNIZE

- WHEN YOU ADDING CARD YOU MUST ACCESS cards ARRAY INSIDE lists.entities TO ADD TO cards NEW ID MEMEBER

- WHEN YOU REMOVING CARD YOU MUST ACCESS cards ARRAY INSIDE lists.entities TO REMOVE from CARDS ONE ID MEMEBER

- ALSO WHEN YOU MOVING CARD YOU ARE REMOVING FROM NESTED cards ARRAY IN INSIDE lists; BUT ALSO YOU ARE ADDING TO OTHER NESTED CARDS array inside lists (SO THERE I CAN USE ONE OF THESE PREVIOUS MENTIONED ENCAPSULATIONS)

### AND YOU CAN CREATE HELPER FUNCTION TO MANIPULATE ARRAY (REMOVING AND ADDING MEMEBERS)

ALSO THAT FUNCTION SHOULD OUTPUT NEW ARRAY

## SO I'LL CREATE MENTIONED HELPERS INSIDE `reducers` FOLDER IN A FILE CALLED `_utilities.js`

## WHEN YO UCREATE THEM GO TO REDUCER FILE TO REFACTOR CODE BY IMPLEMENTING MENTIONED FUNCTIONS

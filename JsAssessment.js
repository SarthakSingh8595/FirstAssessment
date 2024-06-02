/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const container = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _uid, _section, _group, _cgpa) {
  const contain = {
    "name": _name,
    "uid" : _uid,
    "section" : _section,
    "group" : _group,
    "cgpa" : _cgpa
  }
  container.push(contain);
  console.log("Minted" + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0; i<container.length; i++){
    console.log("\nID : " +(i+1));
    console.log("Name: " + container[i].name);
    console.log("UID: " + container[i].uid);
    console.log("Section: " + container[i].section);
    console.log("Group: " + container[i].group);
    console.log("CGPA: " + container[i].cgpa);
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal number of NFTs are: "+ container.length);

}

// call your functions below this line
mintNFT("Sarthak", "21BCS11763", "622", "A", "8.89");
mintNFT("Ritik", "21BCS11777", "623", "A", "7.69");
mintNFT("Sohan", "21BCS11730", "612", "B", "9.02");
listNFTs();
getTotalSupply();

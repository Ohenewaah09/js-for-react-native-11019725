//Task 3
function createUserProfiles(originalNames, modifiedNames){
    return originalNames.map((name, index) => ({
        //arrays of object each containg original names, modified names and id
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1

    }));
}


//export files to other files
module.exports = {createUserProfiles};
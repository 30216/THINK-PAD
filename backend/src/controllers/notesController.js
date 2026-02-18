
export function getAllNotes (req, res){
    res.status(200).json({message:"your fetched  the notes status is active! yo p"});
};

export function updateNote (req, res){
    res.status(200).json({message:"your updated the notes status is active! yo p"});
};
export function createNotes (req, res){
    res.status(200).json({message:"your created the notes status is active! yo p"});
};
export function deleteNote (req, res){
    res.status(200).json({message:"your deleted the notes status is active! yo p"});
};
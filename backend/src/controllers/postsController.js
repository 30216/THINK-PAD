
export function getAllPosts (req, res){
    res.status(200).json({message:"your fetched  the posts status is active! yo p"});
};

export function updatePost (req, res){
    res.status(200).json({message:"your updated the posts status is active! yo p"});
};
export function createPost (req, res){
    res.status(200).json({message:"your created the posts status is active! yo p"});
};
export function deletePost (req, res){
    res.status(200).json({message:"your deleted the posts status is active! yo p"});
};
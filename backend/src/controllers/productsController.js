
export function getAllProducts (req, res){
    res.status(200).json({message:"your fetched  the products status is active! yo p"});
};

export function updateProduct (req, res){
    res.status(200).json({message:"your updated the products status is active! yo p"});
};
export function createProduct (req, res){
    res.status(200).json({message:"your created the products     status is active! yo p"});
};
export function deleteProduct (req, res){
    res.status(200).json({message:"your deleted the products status is active! yo p"});
};
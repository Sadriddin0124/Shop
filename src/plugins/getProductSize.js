export const getProductSize = () => {
    const savedItem = localStorage.getItem("basket")?.split(",")
    const numbersArray = savedItem?.map(item => parseInt(item))
    const set = new Set(numbersArray)
    return set
}
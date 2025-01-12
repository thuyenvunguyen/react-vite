import './style.css'
const SecondComponent = () => {
    const varstr = {
        name: "ThuyenVN",
        age: "30"
    };
    const num = [1, 2, 3];
    return (
        <>
            <div className='child'
                style={{ borderRadius: "10px" }}
            > test 2 {JSON.stringify(varstr)} {num[0]}</div>
            <div></div>

        </>
    );
}

const ThirdComponent = () => {
    return (
        <div>Third</div>
    );
}
export { SecondComponent, ThirdComponent };
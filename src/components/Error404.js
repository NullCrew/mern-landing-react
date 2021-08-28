import MyNavBar from "./Nav";

function Error404() {
    return (
        <div>
            <MyNavBar />
            <h1>Not Found</h1>
            <p>This page can not be found</p>
            <a href="/">Go Home</a>
        </div>
    )
}

export default Error404;

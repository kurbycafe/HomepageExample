import {Container} from "react-bootstrap";

const AdminContactList = () => {

    return (
        <Container>
            <ul className="">
                <li className="cate">
                    <p className="num">NO</p>

                    <p className="tit">제목</p>

                    <p className="name">등록자</p>
                    <p className="date">등록일</p>
                </li>



                    <li onClick="location.href='/board/boardView.do'">
                        <p className="num"></p>

                        <p className="tit">
                            <a href="#">
                                <span> test title </span>
                            </a>
                        </p>

                        <p className="name">test name</p>
                        <p className="date">04. 02. 2025</p>
                    </li>



                {/* <li class="nodata">등록된 게시글이 없습니다.</li> */}
            </ul>
        </Container>
);
}

export default AdminContactList;
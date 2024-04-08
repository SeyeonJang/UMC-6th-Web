import '../styles/Modal.css'

function Modal() {
    return (
        <>
            <div class="modal">
                <div class="modalContent">
                    <div class="modalText">
                        <h2>안녕하세요</h2>
                        <p><b>모달 내용은 어쩌고 저쩌고..</b></p>
                    </div>
                    <div class="modalButton">
                        <button id="btn_close_modal">닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
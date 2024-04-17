// // import React, {useState} from "react"

// // export default function Counter(props){
// //     const [count, setCount] = useState(0)

// //     return(
// //         <>
// //             <p>총 {count}번 클릭했습니다.</p>
        
// //         <button onClick = {() => setCount(count+1)}>클릭</button>
// //         </>
// //     )
// // }
// //userState 예제

// import React, {useState, useEffect} from "react"

// export default function UserStatuswithCounter(props){
//     const [count, setCount] = useState(0)
//     useEffect(() => {
        
//     })
//     const [isOnline, setIsOnline] = useState(null)

//     function handleStatusChange(status){
//         setIsOnline(status.setIsOnline)
//     }

//     // componentDidMount, componentDidUpdate와 비슷하게 작동
//     useEffect(() => {
//         ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
//         return () => {
//          ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
//         }
//         // document.title = `총 ${count}번 클릭했습니다.` //title 도 같이 변하도록
//     })

//     if(isOnline == null){
//         return '대기 중...'
//     }
//     return isOnline ? '온라인' : '오프라인'
// }
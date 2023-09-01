import React from 'react'

function Recurssion({recurssionTree}) {
    const [isVisible, setIsVisible] = useState(false);
    const expand =()=>{
        setIsVisible(!isVisible);
    };

  return (
    <div style={{paddingLeft:10}}>
        <span onClick={expand}>{recurssionTree.name}</span>
        {isVisible?(
            recurssionTree?.children?.map((child)=>{
                return (
                    <div style={{paddingLedt:10}}>
                        <Recurssion recurssionTree={child}/>
                    </div>
                )
            })
            ):(
            <></>
        )}
    </div>
  )
}

export default Recurssion
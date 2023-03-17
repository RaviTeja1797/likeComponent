const Button = props => {
  //  Write your code here.
  const {className, children} = props;
  return (
      <button className = {className}>{children}</button>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='social-buttons-container'>
        <h1 className='social-buttons-heading'>Social Buttons</h1>
        <div className='buttons-container'>
            <Button className='button like' children='Like'/>
            <Button className='button comment' children='Comment'/>
            <Button className='button share' children='Share'/>
        </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))


export default function Input ( {setQueryParam} ) {
  return(
    <div className="mr-30">
      <input type="text" placeholder="First Name" onChange={e => setQueryParam(e.target.value)} />
    </div>
  )
}
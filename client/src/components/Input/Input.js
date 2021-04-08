
export default function Input ( {setQueryParam, placeholder} ) {
  return(
    <div className="mr-30">
      <input type="text" placeholder={placeholder} onChange={e => setQueryParam(e.target.value)} />
    </div>
  )
}
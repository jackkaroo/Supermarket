
export default function Input ( {setQueryParam, placeholder, type} ) {
  return(
    <div className="mr-30">
      <input type={type ? type : 'text'}
             placeholder={placeholder} onChange={e => setQueryParam(e.target.value)} />
    </div>
  )
}

export default function Input ( {setQueryParam, placeholder, type, label} ) {
  return(
    <div className="mr-30">
      {
        label && <label>{label}</label>
      }
      <input type={type ? type : 'text'}
             placeholder={placeholder ? placeholder : ''}  />
    </div>
  )
}
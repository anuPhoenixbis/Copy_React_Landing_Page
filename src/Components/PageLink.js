export const PageLink = ({href,text, itemClass}) => {
  return (
    <>
    <li>{/*passing in the links we wanna access via the links var */ }
        <a href={href} className={itemClass} > {text} </a>
    </li>
    </>
  )
}
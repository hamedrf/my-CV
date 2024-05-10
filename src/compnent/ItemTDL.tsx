export const Item = (props : any) =>
{
	return(
		<div className={"rounded rounded-5 px-4 d-flex justify-content-between align-items-center my-2 " +  (!props.object.isCmp ? " bg-purper" : " bg-success") } >
		<div>
		<button className="btn btn-danger mx-1" onClick={() => props.methodDel(props.object.id)}>حذف</button>
		<button className={"btn mx-1 " +  (!props.object.isCmp ? " btn-success" : " btn-secondary")} onClick={() => props.methodCmp(props.object.id)}>{props.object.isCmp ? "ادامه" : "تکمیل"}</button>
		</div>
		<h4 className="display-4 d-inline text-light">{props.object.text}</h4>
		<span className="h1 bg-primary px-3 my-3 rounded rounded-3 text-light">{props.object.id}</span>
	</div>
	)
}
export interface LayoutProps{
    children?:React.ReactNode|React.ReactNode[];
}

export default function Layout(props:LayoutProps){
    return (
        <div className="h-screen w-full flex justify-center items-center bg-[#2BD5D5]">
            {props.children}
        </div>
    );
}
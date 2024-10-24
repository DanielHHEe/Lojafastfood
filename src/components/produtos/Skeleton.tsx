import { Skeleton } from "@/components/ui/skeleton"
export const Tabskeleton = () => {
    return(
        <div>
            <Skeleton className="w-full h-10 rounded-md mt-24" />
            <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({length: 12}, (item, index) => (
                    <div key={index}>
                        <Skeleton className="w-full h-48 rounded-xl "/>
                        <Skeleton className="mt-2 w-full h-7 rounded-xl "/>
                        <Skeleton className="mt-2 w-20 h-5 rounded-xl "/>
                        <Skeleton className="mt-2 w-full h-9 rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}
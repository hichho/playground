import {useRef} from "react";

const useRenderTimes = (): number => {
    const times = useRef<number>(0);
    times.current += 1;
    return calculateTimes(times.current);
}

export const calculateTimes = (count: number): number => {
    return count >= 2 ? Math.ceil((count / 2)) : 1;
}

export default useRenderTimes;

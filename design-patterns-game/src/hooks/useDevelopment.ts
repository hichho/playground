const useDevelopment = (): boolean => {
    return process.env.NODE_ENV === 'development';
}
export default useDevelopment;

export function useEnv() {
    const { VITE_BUILD_DROP_CONSOLE, VITE_APP_API_BASE_URL, VITE_BUILD_VCONSOLE, NODE_ENV, VITE_BUILD_SOURCEMAP } = import.meta.env;
    // 如果名字变换了，我们可以在这里解构别名
   
    return {
        NODE_ENV,
        VITE_BUILD_SOURCEMAP,
        VITE_APP_API_BASE_URL,
        VITE_BUILD_VCONSOLE,
        VITE_BUILD_DROP_CONSOLE
    };
}
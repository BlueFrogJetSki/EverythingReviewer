export const getAppName = () => {
    const config = useRuntimeConfig()
    return config.public.appName
}
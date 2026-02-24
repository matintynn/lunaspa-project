export const DESIGN_GUIDE_AUTH_STORAGE_KEY = 'designGuideAuthenticated'
export const DESIGN_GUIDE_AUTH_CHANGE_EVENT = 'design-guide-auth-change'

export function isDesignGuideAuthenticated() {
    return sessionStorage.getItem(DESIGN_GUIDE_AUTH_STORAGE_KEY) === 'true'
}

export function setDesignGuideAuthenticated(isAuthenticated) {
    if (isAuthenticated) {
        sessionStorage.setItem(DESIGN_GUIDE_AUTH_STORAGE_KEY, 'true')
    } else {
        sessionStorage.removeItem(DESIGN_GUIDE_AUTH_STORAGE_KEY)
    }

    window.dispatchEvent(new CustomEvent(DESIGN_GUIDE_AUTH_CHANGE_EVENT, {
        detail: { isAuthenticated }
    }))
}
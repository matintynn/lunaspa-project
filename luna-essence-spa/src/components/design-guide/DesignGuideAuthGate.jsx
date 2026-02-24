import { useEffect, useMemo, useState } from 'react'
import Button from '../shared/Button'
import Container from '../shared/Container'
import DesignGuideLayout from '../../pages/DesignGuideLayout'
import {
    DESIGN_GUIDE_AUTH_CHANGE_EVENT,
    isDesignGuideAuthenticated,
    setDesignGuideAuthenticated,
} from '../../lib/designGuideAuth'

function DesignGuideAuthGate({ children }) {
    const expectedAccount = useMemo(() => import.meta.env.VITE_DESIGN_GUIDE_ACCOUNT || 'client', [])
    const expectedPassword = useMemo(() => import.meta.env.VITE_DESIGN_GUIDE_PASSWORD || 'luna123', [])
    const [accountName, setAccountName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(() => isDesignGuideAuthenticated())

    useEffect(() => {
        const handleAuthChange = (event) => {
            setIsAuthenticated(Boolean(event.detail?.isAuthenticated))
        }

        window.addEventListener(DESIGN_GUIDE_AUTH_CHANGE_EVENT, handleAuthChange)
        return () => window.removeEventListener(DESIGN_GUIDE_AUTH_CHANGE_EVENT, handleAuthChange)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        const isValid = accountName.trim() === expectedAccount && password === expectedPassword

        if (!isValid) {
            setError('Invalid account name or password.')
            return
        }

        setError('')
        setDesignGuideAuthenticated(true)
    }

    if (isAuthenticated) {
        return children
    }

    return (
        <DesignGuideLayout>
            <div className="mt-24">
                <Container className="py-20 md:pb-16">
                    <div className="mx-auto max-w-xl rounded-2xl border border-primary-600 bg-white p-8 md:p-10 shadow-sm">
                        <h1 className="text-h2 font-serif font-semibold italic text-primary-800 text-center">Design Guide Login</h1>
                        <p className="mt-3 text-center text-body-md text-neutral-600">
                            Enter account name and password to view the design guide.
                        </p>

                        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="accountName" className="block text-body-sm font-medium text-neutral-700 mb-2">
                                    Account Name
                                </label>
                                <input
                                    id="accountName"
                                    type="text"
                                    autoComplete="username"
                                    value={accountName}
                                    onChange={(event) => setAccountName(event.target.value)}
                                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-body-md text-neutral-800 outline-none focus:border-primary-600"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-body-sm font-medium text-neutral-700 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-body-md text-neutral-800 outline-none focus:border-primary-600"
                                    required
                                />
                            </div>

                            {error && (
                                <p className="text-body-sm text-red-600" role="alert">
                                    {error}
                                </p>
                            )}

                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        </DesignGuideLayout>
    )
}

export default DesignGuideAuthGate
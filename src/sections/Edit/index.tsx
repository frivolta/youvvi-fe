import { GridPageLayout } from "../../components"
import { PageWrapper } from "../../components/PageWrapper"

export const Edit = ()=>{
    const currentUser = {
        token: 'token',
        userId: 'userId',
    }

    const footerContent = "Yuvvi"
    return <PageWrapper><GridPageLayout user={currentUser} sectionName="Dashboard" footerContent={footerContent}>layout</GridPageLayout></PageWrapper>
}
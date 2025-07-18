import type { Widget } from "@/services/dto/home-page.dto"

export const filterHomePageStruc = (widgets: Widget[], fieldName: string): any[] => {
    return widgets.filter(item => item.type === fieldName)
}
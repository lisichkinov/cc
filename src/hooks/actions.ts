import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { settingsActions } from "../store/storage/slice"

const actions = {
    ...settingsActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}
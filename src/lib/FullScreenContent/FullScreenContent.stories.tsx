import React from 'react'
import { FullScreenContent } from './FullScreenContent.component'
import { action } from '@storybook/addon-actions/dist/preview/action'

export default {
    title: 'FullScreenContent',
    component: FullScreenContent,
}

export const Default = () => {
    return (
        <div style={{ position: "relative" }}>

            <FullScreenContent onClose={action('onClose')}>
                Content Above
            </FullScreenContent>

            Novo denique perniciosoque exemplo idem Gallus ausus est inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus, quid de Caesare quisque sentiret. et haec confidenter agebat in urbe ubi pernoctantium luminum claritudo dierum solet imitari fulgorem. postremo agnitus saepe iamque, si prodisset, conspicuum se fore contemplans, non nisi luce palam egrediens ad agenda quae putabat seria cernebatur. et haec quidem medullitus multis gementibus agebantur.
        </div>
    )
}

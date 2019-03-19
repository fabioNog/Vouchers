import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    // calculateSummary() {
    //     const sum = (t, v) => t + v
    //     return {
    //         sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
    //         sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    //     }
    // }

    render() {
        const { handleSubmit, readOnly, services, users, locates } = this.props
        // const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='start_day' component={LabelAndInput} type='number' readOnly={readOnly}
                    label='Dia Inicial' cols='12 4' placeholder='Informe o dia' />
                    <Field name='start_month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês Inicial' cols='12 4' placeholder='Informe o mês' />
                    <Field name='start_year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano Inicial' cols='12 4' placeholder='Informe o ano' />
                    <Field name='code' component={LabelAndInput} readOnly={readOnly}
                        label='Código' cols='12 6' placeholder='Informe o Codigo' />
                    <Field name='end_day' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Dia Final' cols='12 4' placeholder='Informe o dia' />
                    <Field name='end_month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês Final' cols='12 4' placeholder='Informe o mês' />
                    <Field name='end_year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano Final' cols='12 4' placeholder='Informe o ano' />
                    <ItemList cols='12 4' list={services} readOnly={readOnly}
                        field='services' legend='Serviços' />
                    {/* 
                    <Field name='start_day' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Dia Inicial' cols='12 4' placeholder='Informe o dia' />
                    
                    
                    
                    
                    <ItemList cols='12 4' list={users} readOnly={readOnly}
                        field='users' legend='Usuários' />
                    <ItemList cols='12 4' list={locates} readOnly={readOnly}
                        field='locates' legend='Localidades' /> */}
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    services: selector(state, 'services'),
    users: selector(state, 'users'),
    locates: selector(state, 'locates')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
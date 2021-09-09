import * as functions from 'firebase-functions'
import {
    converter,
    functionsMapper
} from './controllers/corrospondingFunctions'

const express = require('express')
const cors = require('cors')
const convert = express()

convert.use(cors({ origin: true }))

convert.post('/', (request: any, response: any) => {
    functions.logger.log('Request body: ', request.body)
    if (!request.is('json')) {
        functions.logger.error('JSON header missing.', { structuredData: true })
        response.status(400).json({
            errors: [
                'JSON header missing. Add to you request headers Content-Type: application/json'
            ]
        })
    } else if (typeof request.body !== 'object') {
        functions.logger.error(
            'Could not interpret JSON: ' + JSON.stringify(request.body),
            { structuredData: true }
        )
        response.status(400).json({
            errors: [
                'Could not interpret JSON: ' + JSON.stringify(request.body)
            ]
        })
    } else {
        // valid request format POST JSON
        //futher validation:
        const errorMessages: string[] = []
        if (!request.body.inputNumber) {
            // errorMessages.push("Input number not specified")
            response.status(200).json({ answer: '' })
        } else if (typeof request.body.inputNumber !== 'string') {
            errorMessages.push(
                'Input number format not valid. Should be string'
            )
        }
        if (!request.body.inputFormat) {
            errorMessages.push('Input format not specified')
        } else if (!functionsMapper[request.body.inputFormat]) {
            errorMessages.push('Input format not valid')
        }
        if (!request.body.outputFormat) {
            errorMessages.push('Output number not specified')
        } else if (!functionsMapper[request.body.outputFormat]) {
            errorMessages.push('Output format not valid')
        }
        if (errorMessages.length === 0) {
            try {
                //calculate answer
                const answer: string = converter(
                    request.body.inputNumber,
                    request.body.inputFormat,
                    request.body.outputFormat
                )
                // Send response
				const answerDecimal = converter(answer, request.body.outputFormat, 'decimal')
				const inputDecimal = converter(
                        request.body.inputNumber,
                        request.body.inputFormat,
                        'decimal'
                    )
                if (
                    answerDecimal === inputDecimal
                ) {
                    functions.logger.log(
                        `Converted ${request.body.inputNumber} from ${request.body.inputFormat} to ${answer} in ${request.body.outputFormat}`
                    )
                    response.status(200).json({ answer: answer })
                    return
                } else {
                    errorMessages.push(`Failed to reverse conversion: ${answerDecimal} != ${inputDecimal}`)
                }
            } catch (e) {
                // error occurred in calculation or sending a response. Probably in calculation
                console.log(e)
                errorMessages.push(`${e}`)
            }
        }
        if (errorMessages.length !== 0) {
            functions.logger.error('Errors occurred during calculation', {
                errors: errorMessages
            })
            response.status(200).json({ errors: errorMessages })
        }
    }
})

exports.convert = functions.https.onRequest(convert)

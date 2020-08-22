"use strict";
exports.__esModule = true;
exports.UploadImageSchema = void 0;
var UploadImageRequest = {};
var UploadImageResponse = {
    type: 'object',
    properties: {
        imageUrl: {
            type: 'string',
            minLength: 1,
            nullable: false,
            example: 'http://image-server.com/route'
        }
    }
};
exports.UploadImageSchema = {
    schema: {
        // body: UploadImageRequest,
        response: {
            200: UploadImageResponse
        }
    }
};

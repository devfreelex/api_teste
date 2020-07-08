const { gql } = require('apollo-server')

module.exports = gql`
    type TrainingType {
        code:Int!
        title:String!
        description:String!
        picture:String!
        lessons:[LessonType]!
        createAt:String!
        updateAt:String!
    }

    type LessonType {
        code:Int!
        duration:String!    
        title:String!
        description:String!
        content:[ContentType]!
        materials:[MaterialType]!
        status:Int!
        createAt:String!
        updateAt:String!
    }  

    type MaterialType {
        title:String!
        link:String!
    }

    type ContentType {
        type:String!
        label:String!
        value:String!
        code:String!
    } 

    input TrainingInput {
        title:String!
        description:String!
        picture:String!
    }    

    input LessonInput {
        lessons:[LessonInputType]!
    }  
    
    input LessonInputType {
        code:Int
        duration:String!    
        title:String!
        description:String!
        content:[ContentInputType]
        materials:[MaterialInputType]!,
        status:Int!       
    }    

    input MaterialInputType {
        title:String!
        link:String!
    }

    input ContentInputType {
        code:Int
        type:String!
        label:String!
        value:String!
    } 

    input TrainingInputFilter {
        code: Int!
    }

`
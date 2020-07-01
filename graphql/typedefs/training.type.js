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
        content:[ContentType!]!
        materials:[MaterialType]!
        createAt:String!
        updateAt:String!
    }  

    type MaterialType {
        title:String!
        link:String!
    }

    type ContentType {
        code:Int!
        paragraph:String
        link:LinkType
        image:String
        video:String
    } 

    type LinkType {
        value:String!
        address:String!
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
        duration:String!    
        title:String!
        description:String!
        content:[ContentInputType]
        materials:[MaterialInputType]!       
    }    

    input MaterialInputType {
        title:String!
        link:String!
    }

    input ContentInputType {
        paragraph:String
        link:LinkInputType
        image:String
        video:String
    } 

    input LinkInputType {
        value:String!
        address:String!
    }

    input TrainingInputFilter {
        code: Int!
    }

`
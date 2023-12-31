// import { Model, models, model } from 'mongoose';
// import { Document, Schema } from 'mongoose';
// import bcrypt from 'bcrypt';


// interface UserDocument extends Document {
//     email: string;
//     password: string;
//     name: string;
//     role: "admin" | "user";
// }

// interface Methods {
//     comparePassword: (password: string) => Promise<boolean>;
// }

// const userSchema = new Schema<UserDocument, {}, Methods>({
//     email: { type: String, required: true, unique: true },
//     name: { type: String, required: true, trim: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
// });

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         throw err;
//     }

// });

// userSchema.methods.comparePassword = async function (password: string) {
//     try {
//         return await bcrypt.compare(password, this.password);

//     } catch (err) {
//         throw err;
//     };
// }

// const UserModel = models.user || model('User', userSchema);

// export default UserModel as Model<UserDocument, {}, Methods>;

import mongoose, { Model, models } from 'mongoose';
import { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserDocument extends Document {
    email: string;
    password: string;
    name: string;
    role: "admin" | "user";
}

interface Methods {
    comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDocument, {}, Methods>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        throw err;
    }
});

userSchema.methods.comparePassword = async function (password: string) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

const UserModel = mongoose.models.user || mongoose.model<UserDocument, Model<UserDocument, {}, Methods>>('user', userSchema);

export default UserModel;

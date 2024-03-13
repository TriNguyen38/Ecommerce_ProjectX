import mongoose from 'mongoose'; // Erase if already required
import bcrypt from 'bcrypt';

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "member",
    },
    cart: {
        type: Array,
        default: [],
    },
    address: [{
        type: mongoose.Types.ObjectId,
        ref: "Adress",
    }],
    wishlist: [{
        type: mongoose.Types.ObjectId,
        ref: "Product",
    }],
    isBlocked: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
    },
    // Dùng cho quên mật khẩu
    passwordChangedAt: {
        type: String,
    },
    passwordResetToken: {
        type: String,
    },
    // tgian hết hạn token gửi cho user, khi họ quên mật khẩu
    passwordResetExpires: {
        type: String,
    },
}, {
    timestamps: true,
});

//Hashcode password
userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods = {
    isCorrectPassword: async function (passwordLogin) {
        return await bcrypt.compare(passwordLogin, this.password); // Compare Password
    },
    createPasswordChangedToken: function () {

    } 
}

//Export the model
export default mongoose.model('User', userSchema);
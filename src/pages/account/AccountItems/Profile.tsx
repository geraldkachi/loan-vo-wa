import { Input, Button } from 'arvara';
import React, { useState } from 'react'

const Profile = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleCuurent = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);
    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
    const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmNewPassword(e.target.value);
    const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = {
            phoneNumber,
            firstName,
            lastName,
            password,
            email,
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        ((event.target as HTMLInputElement).value)
    }
    return (
        <section>
            <div className="p-2">
                <form onSubmit={onFinish}>
                    <Input
                        label="First Name"
                        placeholder="First Name"
                        onChange={handleCuurent}
                        value={currentPassword}
                        className="mt-5"
                    //   TrailingIcon={() => (
                    //     <AIarrowdown1Outlin/>
                    //   )}
                    />
                    <Input
                        label="Last name"
                        placeholder="Last name"
                        onChange={handleNewPassword}
                        value={newPassword}
                        className="mt-5"
                    />
                    <Input
                        label="Email Address"
                        type={'email'}
                        placeholder="Email Address"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />
                    <Input
                        label="Phone Number"
                        type={'tell'}
                        placeholder="Phone Number"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />
                    <Input
                        label="Date of Birth"
                        type={'date'}
                        placeholder="Date of Birth"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />
                    <Input
                        label="State of Residence"
                        // type={''}
                        placeholder="State of Residence"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />
                    <Input
                        label="Home Address"
                        // type={''}
                        placeholder="Home Address"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />

                    <div className="mt-8">
                        <Button  type="button" className="w-full">
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Profile
